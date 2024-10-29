import React from 'react';
import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';

// Define your styles
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
});

// Componente del documento PDF
const PdfDocument: React.FC = () => {
  return (
    <Document>
      <Page>
        <View style={styles.image}>
          {/* Add your content here */}
        </View>
      </Page>
    </Document>
  );
};

export default PdfDocument;