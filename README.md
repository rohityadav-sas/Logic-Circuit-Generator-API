# Logic Circuit Generator API

This Node.js application provides endpoints to solve K-Map and return logic circuit image in a buffer format. The project is hosted on Railway and leverages Express for server handling, Axios for HTTP requests, Cheerio for HTML parsing, and Puppeteer for generating images.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Installation

1. Clone the repository:

    ```bash
    https://github.com/rohityadav-sas/Logic-Circuit-Generator-API

2. Navigate to the source directory:
    ```bash
    cd Logic-Circuit-Generator-API

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start

## Usage

The server will be running on `http://localhost:3000`. You can use tools like `curl` or Postman to interact with the endpoints.

### Example Requests

- **Get Home**:

    ```bash
    curl http://localhost:3000/home
    ```

- **Solve 2 Variables**:

    ```bash
    curl -X POST http://localhost:3000/solve2var -H 'Content-Type: application/json' -d '{"minterms":["1","3"]}'
    ```

- **Solve 3 Variables**:

    ```bash
    curl -X POST http://localhost:3000/solve3var -H 'Content-Type: application/json' -d '{"minterms":["1","3","5"]}'
    ```

## Endpoints

- **GET /home**: Returns a success message to confirm the deployment.

- **POST /solve2var**: Accepts a list of minterms for 2 variables and returns the buffer result.

- **POST /solve3var**: Accepts a list of minterms for 3 variables and returns the buffer result.

- **POST /solve4var**: Accepts a list of minterms for 4 variables and returns the buffer result.

- **POST /solve5var**: Accepts a list of minterms for 5 variables and returns the buffer result.

## Project Structure

- **app.js**: Main application file that sets up the Express server and routes.
- **createPullRequest.js**: Handles the creation of a pull request to the external service.
- **generateBuffer.js**: Generates a buffer from the HTML response using Cheerio and Axios.
- **generateImage.js**: Uses Puppeteer to generate an image from the HTML content.


## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

