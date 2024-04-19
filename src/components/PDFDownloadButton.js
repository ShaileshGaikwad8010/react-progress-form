import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const PDFDocument = ({ formData }) => (
  <Document>
    <Page style={styles.page}>
      <View>
        <Text style={styles.heading}>Preview</Text>
        {formData.personalDetails.profilePhoto && (
          <View style={styles.section}>
            <Text>Profile Photo:</Text>
            <Image src={formData.personalDetails.profilePhoto} style={styles.image} />
          </View>
        )}
        <View style={styles.section}>
          <Text>First Name: {formData.personalDetails.firstName}</Text>
          <Text>Last Name: {formData.personalDetails.lastName}</Text>
          <Text>Email: {formData.personalDetails.email}</Text>
        </View>
        <View style={styles.section}>
          <Text>Address: {formData.addressDetails.address}</Text>
          <Text>City: {formData.addressDetails.city}</Text>
          <Text>Zip Code: {formData.addressDetails.zipCode}</Text>
        </View>
        <View style={styles.section}>
          <Text>Degree: {formData.educationalDetails.degree}</Text>
          <Text>School: {formData.educationalDetails.school}</Text>
          <Text>Graduation Year: {formData.educationalDetails.graduationYear}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    padding: 20,
  },
  heading: {
    fontSize: 16,
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  image: {
    maxWidth: 200,
  },
});

const PDFDownloadButton = ({ formData }) => {
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <div>
      <PDFDownloadLink document={<PDFDocument formData={formData} />} fileName="preview.pdf">
        {({ loading }) => (
          <button disabled={loading || isGenerating} onClick={() => setIsGenerating(true)}>
            {loading ? 'Generating PDF...' : 'Download PDF'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFDownloadButton;
