import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from '../Component/Api/ContextApi'
import SingleNews from '../Component/SingleNews';
import Carousel from 'react-native-snap-carousel';

const NewScreen = () => {
    const [activeIndex, setactiveIndex] = useState();
    const { news: { articles },darkTheme } = useContext(NewsContext);
    const Windowheight = Dimensions.get('window').height;
    return (
        <View style={{...styles.carousel,backgroundColor:darkTheme? 'black' :'white'}}>
            {
                articles && (
                    <Carousel
                        layout='stack'
                        data={articles.slice(0, 10)}
                        sliderHeight={800}
                        itemHeight={Windowheight}
                        vertical={true}
                        renderItem={({item,index}) => {
                            return <SingleNews item={item} index={index} />
                        }}
                        onSnapToItem={(index) => setactiveIndex(index)}
                    />
                )
            }
        </View>
    )
}

export default NewScreen

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        flexWrap:'wrap',
        backgroundColor:'black'
        // transform:[{scaleY:-1}]
    }
})