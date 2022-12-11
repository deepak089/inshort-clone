import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { style } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes'
import { categories, sources } from '../Component/Api/Api';
import Carousel from 'react-native-snap-carousel';
import { NewsContext } from '../Component/Api/ContextApi';
import Search from '../Component/Search';

const DiscoverScreen = () => {
    const { setCategory, setSource,darkTheme } = useContext(NewsContext);
    const windowWidth = Dimensions.get('window').width;
    const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

    return (
        <View style={styles.discover}>
            {/* search */}
             <Search />
            {/* Categories */}
            <Text style={{ ...styles.subtitle, color: darkTheme ?'white':'black' }}>
                Categories
            </Text>
            <Carousel
                layout={"default"}
                data={categories}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            style={styles.category}
                            onPress={() => {
                                setCategory(item.name)
                            }}>
                            <Image
                                source={{ uri: item.pic }}
                                style={styles.categoryImage}
                            />
                            <Text style={{ ...styles.name,  color: darkTheme ?'white':'black' }}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
                sliderWidth={windowWidth}
                itemWidth={SLIDE_WIDTH}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
            />
            {/* sources */}
            <Text style={{ ...styles.subtitle,  color: darkTheme ?'white':'black' }}>
                Sources
            </Text>
            <View style={styles.sources}>
                {sources && sources.map((s) => {
                return (
                    <TouchableOpacity
                        onPress={() => setSource(s.id)}
                        key={s.id}
                        style={styles.sourceContainer}
                    >
                        <Image source={{ uri: s.pic }}
                            style={styles.sourceImage} />
                    </TouchableOpacity>
                )
            })
            }
            </View>
        </View>
    )
}
export default DiscoverScreen

const styles = StyleSheet.create({
    discover: {
        padding: 10,
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: '#007FFF',
        borderBottomWidth: 5,
        alignSelf: 'flex-start',
        borderRadius: 10
    },
    categoryImage: {
        height: '30%',
        width: '40%',
        resizeMode: 'contain'
    },
    name: {
        fontSize: 14,
        textTransform: 'capitalize'
    },
    category: {
        height: 100,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    sourceImage: {
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover'
    },
    sources: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingVertical: 15,
    },
    sourceContainer: {
        height: 150,
        width: '40%',
        borderRadius: 10,
        margin:15,
        backgroundColor: '#cc313d'
    }

})