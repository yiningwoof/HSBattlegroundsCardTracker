import Gallery from 'react-native-image-gallery';

export default function ImageGallery() {
    const bear = require('../assets/little_north_baby.png');
    const shark = require('../assets/shaxi.png');
    const toad = require('../assets/flower_back.png')

    return (
        <Gallery
            style={{flex: 1, backgroundColor: '#faf0e6'}}
            images={[
                { source: bear, dimensions: { width: 300, height: 300 }},
                { source: shark, dimensions: { width: 300, height: 300 } },
                { source: toad, dimensions: { width: 300, height: 300 } }
            ]}
        />
    )
};