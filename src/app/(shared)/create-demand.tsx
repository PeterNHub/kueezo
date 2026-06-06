import { useState } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default function CreateDemand() {
  const [budgetRange, setBudgetRange] = useState([100, 300]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Demand</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Budget Range</Text>
        <View style={styles.sliderContainer}>
          <Text style={styles.budgetText}>
            ${budgetRange[0]} - ${budgetRange[1]}
          </Text>
          <MultiSlider
            values={[budgetRange[0], budgetRange[1]]}
            sliderLength={280}
            onValuesChange={(values) => setBudgetRange(values)}
            min={0}
            max={1000}
            step={10}
            selectedStyle={{ backgroundColor: COLORS.primary }}
            unselectedStyle={{ backgroundColor: '#E0E0E0' }}
            markerStyle={{ backgroundColor: COLORS.primary, height: 20, width: 20 }}
            containerStyle={{ alignSelf: 'center' }}
          />
        </View>
        <Text style={styles.label}>Deadline</Text>
        <TouchableOpacity style={styles.dateInput}>
          <Text>Calendar 2024</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Describe What You Need</Text>
        <TextInput
          placeholder="Describe What You Need"
          multiline
          style={styles.descriptionInput}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  form: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sliderContainer: {
    marginBottom: 16,
  },
  budgetText: {
    textAlign: 'center',
    color: COLORS.primary,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 12,
    height: 100,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
