import React, { useState } from 'react';
import { Button, View, Image, Text, StyleSheet } from 'react-native';
import { recipes } from './recipeList';

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((nextIndex) => (nextIndex === recipes.length - 1 ? 0 : nextIndex + 1))
    }

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? recipes.length - 1 : prevIndex - 1))
    }

    return (
        <View style={styles.container}>
            
            <Image
                source={{ uri: recipes[currentIndex].url }}
                style={{ width: 350, height: 350 }}
            />
            <Text>{recipes[currentIndex].description}</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Prev"
                    onPress={handlePrevious}
                />
                
                {/* Using this View element to create space between the buttons */}
                <View style={styles.space} />

                <Button
                    title="Next"
                    onPress={handleNext}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        
    },
    button: {
        marginHorizontal: 10,
    },
    space: {
        width: 225,
        height: 20,
    }
});

export default Gallery;