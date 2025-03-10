import database from '@react-native-firebase/database'

export const addSensorData = async (sensor) => {
    try {
        const newRef =  database().ref('/sensor').push();
        await newRef.set(sensor);
        console.log("data added");
        
    } catch (error) {
        console.log("Error adding sendor data",error);
        
    }
}



export const getSensorData = async () => {
    try {
        const snapshot =  await database().ref('/sensor').once('value')
        const sensorData = snapshot.val()? Object.entries(snapshot.val()).map(([id, data])=>({
            id, ...data
        })) : [];
        console.log('fetched data', sensorData);
        
        console.log("data added");
        
    } catch (error) {
        console.log("Error fetching sendor data",error);
        
    }
}

export const updateSensorData = async (id, update) => {
    try {
       await database().ref(`/sensor/${id}`).update(update);

        console.log("data updated");
        
    } catch (error) {
        console.log("Error adding sendor data",error);
        
    }
}



