## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run commands:

``` bash
# Go to directory in terminal
cd <path_to_project>

# Pull latest changes from git
git pull origin master

# Install dependencies (only once)
npm install

# Run the local server
npm run dev

# Build for production in the dist/ directory
npm run build

# To add a new model
1. Insert gltf or glb file into `static/models` directory
2. Uncomment GLTF Import section from `script.js`
3. Change the `<name_of_the_model>` with the file name of the model
4. Restart local server
```