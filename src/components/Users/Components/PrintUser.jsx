import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
export function PrintUser({user}) {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'column',
            padding: 20,
            fontFamily: 'Helvetica',
            fontSize: 12,
        },
        section: {
            marginBottom: 10,
        },
        label: {
            fontWeight: 'bold',
            marginRight: 5,
        },
        value: {
            marginBottom: 5,
        },
        title: {
            fontSize: 16,
            marginBottom: 10,
            fontWeight: 'bold',
            textDecoration: 'underline',
        },
    });

    const MyDocument = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.title}>User Information</Text>
                    <View style={styles.section}>
                        <Text style={styles.label}>Name:</Text>
                        <Text style={styles.value}>{user.name}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.label}>Surname:</Text>
                        <Text style={styles.value}>{user.surname}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.label}>Birth Date:</Text>
                        <Text style={styles.value}>{user.birthDay}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.label}>Social Number:</Text>
                        <Text style={styles.value}>{user.cin}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.label}>Phone Number:</Text>
                        <Text style={styles.value}>{user.phoneNumber}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.label}>Address:</Text>
                        <Text style={styles.value}>{user.address}</Text>
                    </View>
                    <View style={styles.section}>

                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.value}>{user.email}</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );


    return (
        <div>
            {user ? (
                <div>
                    <h2>User Information</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    {/* Add more fields as needed */}
                    <PDFViewer width="1000" height="600">
                        <MyDocument/>
                    </PDFViewer>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}