# Use the following command to initial setup        

git init
touch README.md
echo "node_modules/" > .gitignore
git add .
git commit -m "Initial commit on main"
git branch -M main
git remote add origin https://github.com/your-username/my-fullstack-app.git
git push -u origin main