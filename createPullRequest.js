const axios = require('axios');
const generateBuffer = require('./generateBuffer');

async function createPullRequest(noOfVariables, minterms) {
    try {
        const formData = {
            calctype: 'sop',
            drawtype: 'htmlcss'
        };
        for (let i = 0; i < Math.pow(2, noOfVariables); i++) {
            if (minterms.includes(i.toString())) {
                formData[`in${i}`] = '1';
            }
            else {
                formData[`in${i}`] = '0';
            }
        }
        const response = await axios.post('http://www.32x8.com/circuits' + noOfVariables, formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const bufferResult = await generateBuffer(response.data);
        return bufferResult;
    } catch (error) {
        console.error('An error occurred while creating the pull request:');
    }
}

module.exports = createPullRequest;