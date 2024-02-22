function processData(data) {
  try {
    // Simulate processing data
    if (!data) {
      throw new Error("No data provided");
    }

    console.log("Processing data: ", data);
    // More data processing logic here
    // ...

    return "Processed data successfully";
  } catch (error) {
    // Handle errors that occur in the try block
    console.error("Error occurred:", error.message);

    // Optionally, rethrow the error if you want it to propagate
    throw error;
  } finally {
    // This block executes regardless of try/catch result
    console.log("Process completed, with or without errors");
  }
}

// Example usage
try {
  const result = processData(null); // Passing null to simulate an error
  console.log(result);
} catch (error) {
  console.error("Caught an error:", error.message);
}
