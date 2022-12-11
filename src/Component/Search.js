import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { NewsContext } from './Api/ContextApi'
import { Entypo } from '@expo/vector-icons';
import SingleNews from '../Component/SingleNews';
const Search = () => {
    const { news: { articles },darkTheme } = useContext(NewsContext);

    const [searchResult, setsearchResult] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentNews, setCurrentNews] = useState();

    const handleSearch = (text) => {
        if (!text) {
            setsearchResult([]);
            return;
        }
        setsearchResult(articles.filter((query) => query.title.includes(text)));
    }

    const handleModal = (n) => {
        setModalVisible(true);
        setCurrentNews(n);
    }
    return (
        <View style={{
            ...styles.container,
            width: '100%',
            position: 'relative'
        }}>
            <TextInput
                style={{
                    ...styles.search,
                    backgroundColor: darkTheme ?'black' :'lightgrey'
                }}
                onChangeText={(text) => handleSearch(text)}
                placeholder="Search for news"
                placeholderTextColor={darkTheme ? "white" :'black'}
            ></TextInput>

            <View style={styles.searchResults}>
                {searchResult && searchResult.slice(0, 10).map((n) => {
                    return (
                        <TouchableOpacity
                            key={n.id}
                            activeOpacity={0.7}
                            onPress={() => handleModal(n)}>
                            <Text
                                style={{
                                    ...styles.singleResult,
                                    shadowColor: darkTheme?'black' :'white',
                                    backgroundColor: darkTheme ?'black':'white',
                                    color: darkTheme?'white':'black'
                                }}>
                                {n.title}
                            </Text>
                        </TouchableOpacity>
                    )
                })}

            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() =>
                    setModalVisible(!modalVisible)}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(!modalVisible)}
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        right: 0,
                        margin: 10,
                        marginTop: 60
                    }}
                >
                    <Entypo name="circle-with-cross"
                        size={30}
                        color='white' />

                </TouchableOpacity>
                <View
                    style={{
                        height: '100%',
                    }}>
                    <SingleNews item={currentNews}
                    /></View>
            </Modal>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    search: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        fontSize: 15,
        marginBottom: 15.
    },
    searchResults: {
        position: 'absolute',
        zIndex: 1,
        top: 50
    },
    singleResult: {
        borderRadius: 5,
        padding: 10,
        margin: 0.5,
        elevation: 5
    }
})