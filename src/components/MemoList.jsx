import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  shape,
  string,
  instanceOf,
  arrayOf,
} from 'prop-types';

import Icon from './Icon';

export default function MemoList(props) {
  const { memos } = props;
  const navigation = useNavigation();
  return (
    <View>
      {memos.map((memo) => (
        <TouchableOpacity
          key={memo.id}
          style={styles.memoListItem}
          onPress={() => {
            navigation.navigate('MemoDetail');
          }}
        >
          <View>
            <Text style={styles.memoListItemTitle}>
              {memo.bodyText}
            </Text>
            <Text style={styles.memoListItemDate}>
              {String(memo.updatedAt)}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.memoDelete}
            onPress={() => {}}
          >
            <Icon name="delete" size={24} color="#b0b0b0" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>
            買い物リスト
          </Text>
          <Text style={styles.memoListItemDate}>
            2020年12月24日 10:00
          </Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => {}}
        >
          <Icon name="delete" size={24} color="#b0b0b0" />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>
            買い物リスト
          </Text>
          <Text style={styles.memoListItemDate}>
            2020年12月24日 10:00
          </Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => {}}
        >
          <Icon name="delete" size={24} color="#b0b0b0" />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

MemoList.propTypes = {
  memos: arrayOf(
    shape({
      id: string,
      bodyText: string,
      updatedAt: instanceOf(Date),
    }),
  ).isRequired,
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});
