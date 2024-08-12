# Logic Circuit Generator API

This Node.js application provides endpoints to solve K-Map and return logic circuit image in a buffer format. The project is hosted on Railway and leverages Express for server handling, Axios for HTTP requests, Cheerio for HTML parsing, and Puppeteer for generating images.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

    ```bash
    https://github.com/rohityadav-sas/Logic-Circuit-Generator-API
    ```

2. Navigate to the source directory:
    ```bash
    cd Logic-Circuit-Generator-API
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    npm start
    ```

## Usage

The server will be running on `http://localhost:3000`. You can use tools like `curl` or Postman to interact with the endpoints.

### Example Requests

- **Get Home**:

    ```bash
    curl http://localhost:3000/home
    ```

- **Solve 2 Variables**:
    + Using CMD:

        ```bash
        curl -X POST -H "Content-Type:application/json" -d "{\"minterms\":[\"0\",\"3\"]}" http://localhost:3000/solve2var -o logic-circuit.jpg
        ```

    + Using Powershell:
        ```bash
        curl.exe -X POST -H 'Content-Type:application/json' -d '{\"minterms\":[\"0\",\"3\"]}' http://localhost:3000/solve2var -o logic-circuit.jpg
        ```

- **Solve 3 Variables**:
    + Using CMD:

        ```bash
        curl -X POST -H "Content-Type:application/json" -d "{\"minterms\":[\"1\",\"3\",\"5\"]}" http://localhost:3000/solve3var -o logic-circuit.jpg
        ```
    
    + Using Powershell:
        ```bash
        curl.exe -X POST -H 'Content-Type:application/json' -d '{\"minterms\":[\"1\",\"3\",\"5\"]}' http://localhost:3000/solve3var -o logic-circuit.jpg
        ```

## Endpoints

- **GET /home**: Returns a success message to confirm the deployment.

- **POST /solve2var**: Accepts a list of minterms for 2 variables and returns the buffer result.

- **POST /solve3var**: Accepts a list of minterms for 3 variables and returns the buffer result.

- **POST /solve4var**: Accepts a list of minterms for 4 variables and returns the buffer result.

- **POST /solve5var**: Accepts a list of minterms for 5 variables and returns the buffer result.

## Dependencies

- ***axios***: For making HTTP requests.

- ***cheerio***: For parsing HTML and extracting data.

- ***express***: For handling HTTP requests.

- ***puppeteer***: For headless browser automation and web scraping.

## License

This project is licensed under the ISC License. See the [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

