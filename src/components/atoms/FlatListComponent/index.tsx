import React from 'react';
import {FlatList, ListRenderItem, ViewStyle} from 'react-native';

interface IFlatListComponent {
  scroll: boolean;
  list: any[];
  renderItem: ListRenderItem<any>;
  style?: ViewStyle;
  empty: React.ReactComponentElement<any>;
  contentStyle?: ViewStyle;
  activeIndex?: boolean;
  action?: () => void;
  renderFooter?: React.ReactComponentElement<any> | null;
}

const FlatListComponent = ({
  scroll,
  list,
  renderItem,
  style,
  empty,
  contentStyle,
  activeIndex,
  action,
  renderFooter,
}: IFlatListComponent) => {
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      scrollEnabled={scroll}
      style={style}
      contentContainerStyle={contentStyle}
      keyExtractor={(item, index) => (activeIndex ? index : item.id)}
      ListEmptyComponent={empty}
      showsVerticalScrollIndicator={false}
      onEndReached={action}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
};

export default FlatListComponent;
