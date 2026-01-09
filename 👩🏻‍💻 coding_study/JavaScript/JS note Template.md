# [Topic Name]

**Date:** 2026-01-09  
**Jira Ticket:** [SV-XXX]  
**Status:** 🟡 Learning / 🟢 Mastered

---

## 💡 Concept Overview
> Brief 1-2 sentence explanation of what this concept is in plain English.

## 💻 Code Examples
```javascript
// Example of the concept in action
const example = () => {
    console.log("Keep it simple and commented!");
};
```

## 🚩 Key Gotchas / Common Mistakes

- Don't forget that `null` is an object in JS!
    
- Watch out for block scoping with `let` vs `var`.
    

## 🔗 Resources

- [MDN Documentation](https://developer.mozilla.org/)
    
- [Course Video Link]

````

---

### 🚀 Your First "Magic Link" Task
To get everything running, let's do one complete cycle together. 

**1. In Jira:**
* Create a ticket called **"Setup Study Vault Structure"**.
* Note the Key (e.g., `SV-1`).

**2. In VS Code Terminal:**
Copy and paste these lines one by one (after saving your template file):

```bash
# 1. Check your status
git status

# 2. Stage the new files
git add .

# 3. The Magic Commit (Use YOUR Jira Key here!)
git commit -m "SV-1: Created repository structure and note templates"

# 4. Push to GitHub
git push origin main
````

### One last tip: The `.gitignore`

When you start your **Project**, you might install "packages" (like Node modules). These are huge files that you _don't_ want on GitHub.

Create a file in your main folder named exactly `.gitignore` and paste this inside:

```
node_modules/
.DS_Store
.env
```

This tells GitHub: "Ignore these messy folders and only track my beautiful notes and code."