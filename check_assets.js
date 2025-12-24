const fs = require('fs');
const path = require('path');

// Read menu.ts
const menuPath = path.join('app', 'data', 'menu.ts');
const assetsDir = path.join('public', 'assets');

try {
    const menuContent = fs.readFileSync(menuPath, 'utf8');

    // Regex to find image paths
    // Look for image: "/assets/..."
    const regex = /image:\s*["']\/assets\/([^"']+)["']/g;
    let match;
    const items = [];

    while ((match = regex.exec(menuContent)) !== null) {
        items.push(match[1]);
    }

    console.log(`Found ${items.length} image references in menu.ts`);

    let errors = 0;
    items.forEach(filename => {
        const filePath = path.join(assetsDir, filename);
        if (!fs.existsSync(filePath)) {
            console.error(`[MISSING] ${filename}`);
            errors++;
        } else {
            // Check for casing issues (Windows is case insensitive, but strict environments aren't)
            const actualFiles = fs.readdirSync(assetsDir);
            const exactMatch = actualFiles.find(f => f === filename);
            if (!exactMatch) {
                console.error(`[CASE MISMATCH] Code has '${filename}' but file system has '${actualFiles.find(f => f.toLowerCase() === filename.toLowerCase())}'`);
                errors++;
            }
        }
    });

    if (errors === 0) {
        console.log("ALL ASSETS VERIFIED. No missing files.");
    } else {
        console.log(`FOUND ${errors} ASSET ERRORS.`);
        process.exit(1);
    }

} catch (err) {
    console.error("Error reading files:", err);
    process.exit(1);
}
