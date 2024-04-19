// Preview.js
import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center', // Align items to the center
    padding: 10,
  },
  section: {
    margin: 10,
    textAlign: 'left',
    paddingBottom: 10, // Add padding bottom
  },
  sectionWithBorder: {
    borderBottom: '1px solid #000', // Add border bottom
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 25,
  },
  doubleUnderline: {
    textDecoration: 'underline double', // Double underline style
  },
  image: {
    maxWidth: 1000,
    marginBottom: 10,
  },
  downloadLink: {
    display: 'inline-block',
    padding: 10,
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: 5,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

const Preview = ({ formData }) => {
  // Function to format the data for PDF rendering
  const formatDataForPDF = () => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={[styles.sectionTitle, styles.doubleUnderline]}>Preview</Text> {/* Centered headline with double underline */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Details</Text>
            {formData.personalDetails.profilePhoto && (
              <View style={styles.section}>
                <Text>Profile Photo:</Text>
                <Image src={formData.personalDetails.profilePhoto} style={styles.image} />
              </View>
            )}
            <Text>First Name: {formData.personalDetails.firstName}</Text>
            <Text>Last Name: {formData.personalDetails.lastName}</Text>
            <Text>Email: {formData.personalDetails.email}</Text>
          </View>
          <View style={[styles.section, styles.sectionWithBorder]}>
            <Text style={styles.sectionTitle}>Address Details</Text>
            <Text>Address: {formData.addressDetails.address}</Text>
            <Text>City: {formData.addressDetails.city}</Text>
            <Text>Zip Code: {formData.addressDetails.zipCode}</Text>
          </View>
          <View style={[styles.section, styles.sectionWithBorder]}>
            <Text style={styles.sectionTitle}>Educational Details</Text>
            <Text>Degree: {formData.educationalDetails.degree}</Text>
            <Text>School: {formData.educationalDetails.school}</Text>
            <Text>Graduation Year: {formData.educationalDetails.graduationYear}</Text>
          </View>
        </Page>
      </Document>
    );
  };

  return (
    <div id='preview'>
      <h2 id='h2'>Preview</h2>
      <PDFDownloadLink document={formatDataForPDF()} fileName="preview.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : (
            <a href={url} target="_blank" rel="noopener noreferrer" style={styles.downloadLink}>
              Download PDF
            </a>
          )
        }
      </PDFDownloadLink>
      {/* Render preview content */}
      <div id='subdiv'>
        {formData.personalDetails.profilePhoto && (
          <div>
            <h3>Profile Photo:</h3>
            <img src={formData.personalDetails.profilePhoto} alt="Profile" style={{ maxWidth: '200px' }} />
            <hr />
          </div>
        )}
        <h5>First Name: {formData.personalDetails.firstName}</h5>
        <h5>Last Name: {formData.personalDetails.lastName}</h5>
        <h5>Email: {formData.personalDetails.email}</h5>
        <hr />
      </div>
      <div id='subdiv'>
        <h5>Address: {formData.addressDetails.address}</h5>
        <h5>City: {formData.addressDetails.city}</h5>
        <h5>Zip Code: {formData.addressDetails.zipCode}</h5>
        <hr />
      </div>
      <div id='subdiv'>
        <h5>Degree: {formData.educationalDetails.degree}</h5>
        <h5>School: {formData.educationalDetails.school}</h5>
        <h5>Graduation Year: {formData.educationalDetails.graduationYear}</h5>
      </div>
    </div>
  );
};

export default Preview;
