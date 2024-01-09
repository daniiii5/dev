function parseTextToJSON(text) {
    const categories = [];
    let currentCategory = null;
    let currentTitle = null;
    let currentDescription = null;
    let currentFlags = [];
    let currentRequirements = [];

    const lines = text.split('\n');
    lines.forEach(line => {
        if (line.startsWith('# ')) {
            if (currentCategory !== null) {
                const categoryObj = {
                    category: currentCategory,
                    title: currentTitle,
                    description: currentDescription,
                    flags: currentFlags,
                    requirements: currentRequirements
                };
                categories.push(categoryObj);
            }
            currentCategory = line.replace('# ', '').trim();
            currentFlags = [];
            currentRequirements = [];
        } else if (line.startsWith('## ')) {
            currentTitle = line.replace('## ', '').trim();
        } else if (line.startsWith('```md')) {
            console.log(line)
        } else if (line.trim().startsWith('- [My week](#my-week)')) {
            currentRequirements.push('#my-week');
        } else if (line.trim().startsWith('- [Highlights tray as cards](#highlights-tray-as-cards) (new versions)')) {
            currentRequirements.push('#highlights-tray-as-cards');
        } else {
            currentDescription = line.trim();
        }
    });

    // Add the last category data
    if (currentCategory !== null) {
        const categoryObj = {
            category: currentCategory,
            title: currentTitle,
            description: currentDescription,
            flags: currentFlags,
            requirements: currentRequirements
        };
        categories.push(categoryObj);
    }

    return JSON.stringify(categories, null, 4);
}

// Usage example:
const text = `
# Profile

## Highlights design

\`\`\`md
japan labs my week is edit header enable
\`\`\`

Enable a new edit button over your profile highlights, you can enable some settings

-   [My week](#my-week)
-   [Highlights tray as cards](#highlights-tray-as-cards) (new versions)
`;

const result = parseTextToJSON(text);
console.log(result);