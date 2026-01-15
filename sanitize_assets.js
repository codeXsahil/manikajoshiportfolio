import fs from 'fs';
import path from 'path';

const rootDir = 'src/assets/images';

function sanitize(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            sanitize(fullPath);
        } else {
            // Replace spaces, parens with underscores or remove them
            const newName = file
                .replace(/\s+/g, '_')
                .replace(/[()]/g, '')
                .replace(/_+/g, '_'); // collapse multiple underscores

            if (newName !== file) {
                const newPath = path.join(dir, newName);
                fs.renameSync(fullPath, newPath);
                console.log(`Renamed: ${file} -> ${newName}`);
            }
        }
    });
}

sanitize(rootDir);
