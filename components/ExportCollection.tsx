import React from 'react';
import { View, Button, Text } from 'react-native';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { exportCollection } from '@/store/ankiSlice';

const ExportCollection = () => {
  const dispatch = useAppDispatch();
  const exportStatus = useAppSelector((state) => state.anki.exportStatus);

  const handleExport = () => {
    dispatch(exportCollection());
  };

  return (
    <View>
      <Button title="Export Collection" onPress={handleExport} />
      <Text>Export Status: {exportStatus}</Text>
    </View>
  );
};

export default ExportCollection;