import React, { useState, useEffect } from "react";
import { 
  StyleSheet,
  TouchableHighlight, 
  ScrollView,
  View, 
  Text,
  Button
} from "react-native";
import PropTypes from 'prop-types';

export const Send = () => {
    const [selectedWordIdx, setSelectedWordIdx] = useState(-1)
    const [ wordList, setWordList] = useState(null)


    useEffect(() => {
        let wordList = [];

         // Break down all the words detected by the camera
    if(wordBlock && 
        wordBlock.textBlocks && 
        wordBlock.textBlocks.length > 0) {
       for(let idx=0; idx < wordBlock.textBlocks.length; idx++) {
         let text = wordBlock.textBlocks[idx].value;
         if(text && text.trim().length > 0) {
           let words = text.split(/[\s,.?]+/);
           if(words && words.length > 0) {
             for(let idx2=0; idx2 < words.length; idx2++) {
               if(words[idx2].length > 0)
                 wordList.push(words[idx2]);
             }
           }
         }
       }
 
       setWordList(wordList);
     }

    }, [])


  // Pupulate the words UI for the user to select
  const populateWords = () => {
    const wordViews = [];
   
    if(wordList && wordList.length > 0) {
      for(let idx=0; idx < wordList.length; idx++) {
        wordViews.push(
          <TouchableHighlight key={'Word_' + idx} underlayColor={'#d6f9ff'} 
            onPress={() => {
              setSelectedWordIdx(idx);
            }}
            style={selectedWordIdx == idx ? styles.selectedWord : styles.nonSelectedWord}
          >
            <Text style={styles.word}>{wordList[idx]}</Text>
          </TouchableHighlight>
        );
      }
    }

    return wordViews;
  }

   
    return (
      <View style={[styles.container, style]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Please select a word below and click on the Ok button.</Text>
        </View>
        <ScrollView>
          <View style={styles.wordList}>
            { populateWords() }
          </View>
        </ScrollView>
        <Button title='OK' 
          disabled={!(selectedWordIdx >= 0 && wordList && wordList.length > selectedWordIdx)}
          onPress={() => {
            onWordSelected && onWordSelected(wordList[selectedWordIdx]);
          }}/>
        <View style={{minHeight: 30}}></View>
      </View>
    );
}

WordSelector.propTypes = {
  wordBlock: PropTypes.object,
  onWordSelected: PropTypes.func
};

WordSelector.defaultProps = {
  wordBlock: null,
  onWordSelected: null
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'white'
  },
  header: {
    padding: 4,
  },
  headerText: {
    fontSize: 20
  },
  wordList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 4
  },
  selectedWord: {
    flex: 0,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: '#d6f9ff',
    padding: 4
  },
  nonSelectedWord: {
    flex: 0,
    borderWidth: 0,
    padding: 4
  },
  word: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  okButton: {
    marginBottom: 50,
    fontSize: 30
  }
});