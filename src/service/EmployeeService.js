import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/employee`
class EmployeeService{

    //**Method to get all employee from our api or database */
    getAllEmployee(){
        return axios.get(BASE_URL);
    }
    /**MEthod to save employee */
    saveEmployee(employeeData){
        return axios.post(BASE_URL, employeeData);
    }
    updateEmployee(id, employeeData){
        return axios.put(`${BASE_URL}/${id}`, employeeData)
    }
    getEmployeeById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    deleteEmployee(id){
        return axios.delete(BASE_URL +"/" +id);
    }

    /** Method to upload a file */
    uploadFile(formData) {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/files`, formData);
    }


}
export default new EmployeeService();