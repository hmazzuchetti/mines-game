import { Dimensions } from 'react-native';

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //Superior panel proportion on screen
    difficultLevel: 0.1,
    /**
     * Calculate the number of columns based on the screen size
     * @returns {number} Number of columns based on screen size
     */
    getColumnsAmount() {
        const width = Dimensions.get('window').width;
        return Math.floor(width / this.blockSize);
    },
    /**
     * Calculate the number of rows based on the screen size
     * @returns {number} Number of rows based on screen size
     */
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height;
        const boardHeight = totalHeight * (1 - this.headerRatio);
        return Math.floor(boardHeight / this.blockSize);
    }
}

export default params;