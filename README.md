# Todo List React App

This is a simple Todo List application built with React and Vite. It allows users to add, edit, delete, and mark todos as completed. 

## Live Demo

Check out the live demo: [Todo List App](https://05sanjaykumar.github.io/Todo-List/)

## Features

- Add new todos
- Edit existing todos
- Delete todos
- Mark todos as completed
- Local storage persistence

## Getting Started

These instructions will help you set up a copy of the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/05sanjaykumar/Todo-List.git
   ```

2. Navigate to the project directory:
   ```
   cd Todo-List
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the app.

## Building for Production

To create a production build, run:

```
npm run build
```

This will generate a `dist` folder with the production-ready files.

## Deployment

To deploy the app to GitHub Pages:

1. Ensure your `vite.config.js` file has the correct base URL:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/Todo-List/',
   })
   ```

2. Run the deploy script:
   ```
   npm run deploy
   ```

This will build the app and push it to the `gh-pages` branch of your repository.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [uuid](https://github.com/uuidjs/uuid) - For generating unique IDs

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).


## Images

- <img width="1438" alt="Screenshot 2024-06-30 at 4 12 02 PM" src="https://github.com/05sanjaykumar/Todo-List/assets/132453013/fbda7731-3314-4643-8e73-1be29492226c">



