# Personal Website

This project is my personal website, built using Angular. Feel free to fork this repository and use it to create your own personal website.

## Features

- **Responsive Design**: The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.
  
- **Portfolio Showcase**: Showcase your projects and achievements in the portfolio section, providing visitors with a comprehensive view of your work.

- **About Me**: Use the about me section to introduce yourself, highlight your skills, and share your background and interests.

- **Contact Information**: Include contact information so that visitors can easily reach out to you.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- Angular CLI

### Installation

1. **Fork the Repository**: Click the "Fork" button at the top right corner of this repository to create your own copy.

2. **Clone the Repository**: Clone the forked repository to your local machine using the following command:

    ```bash
    git clone https://github.com/your-username/personal-website.git
    ```

3. **Install Dependencies**: Navigate to the project directory and install the dependencies:

    ```bash
    cd personal-website
    npm install
    ```

4. **Run the Application**: Start the development server to run the application locally:

    ```bash
    ng serve
    ```

    Open your browser and visit `http://localhost:4200/` to see your personal website.

5. **Linting with ESLint and Angular CLI**:
   The project uses ESLint for TypeScript linting. Ensure you have ESLint installed by running:

    ```bash
    npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-angular --save-dev
    ```

   Also, make sure to integrate ESLint with Angular CLI by running:

    ```bash
    ng add @angular-eslint/schematics
    ```

   Now, you can run the following command to lint your code:

    ```bash
    npm run lint
    ```

   This will check your TypeScript code for linting issues. Make sure that any file updates pass the `ng lint` prompt before committing changes.

## Running Tests with Jest

Jest is configured for testing in this project. Run the tests with the following command:

```bash
npm run test
```

## Customization

1. **Edit Content**: Update the content in the various components (such as the about me section, portfolio, etc.) to reflect your personal information.

2. **Styling**: Customize the styles by modifying the SCSS files in the `src/app` directory.

3. **Add Projects**: Expand the portfolio section by adding your own projects. Update the `projects` array in the `portfolio.component.ts` file.

## GitHub Actions Workflows

This project uses GitHub Actions for continuous integration and deployment. There are two workflows:

- Build and Deploy Workflow (build-and-deploy.yml):

    - Triggers on every push to the main branch.
    - Runs the production build and deploys to GitHub Pages _(if needed)_
    - Checks for the .ghpages-deploy file inside the `.github` folder to determine deployment to Github Pages.

## Workflow Configuration

The workflow configurations can be found in the .github/workflows directory.

## Contributing

1. Fork the repository.
2. Create a new branch: git checkout -b feature/my-feature.
3. Commit your changes: git commit -am 'Add new feature'.
4. Push to the branch: git push origin feature/my-feature.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- This project was built with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3. Check out the [Angular documentation](https://angular.io/) for more information.

Feel free to contribute, open issues, or suggest improvements. Happy coding!

