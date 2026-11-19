
print("DISASTER RECOVERY STRATEGIES");

print("1. Accidental collection deletion:");
print("   Restore the collection using mongorestore.");

print("2. Primary server failure:");
print("   Elect a secondary node as the new primary.");

print("3. Database corruption:");
print("   Restore data from the latest valid backup.");

print("4. Hardware failure:");
print("   Replace hardware and restore backup data.");

print("5. Accidental data modification:");
print("   Restore backup and recover required data using oplog.");