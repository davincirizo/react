import MUIDataTable from "mui-datatables" 

const columns = ["Nombre","Empresa","Ciudad","Estado"];
const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"]
];
const option = {filterType: 'checkbox'};


export const TableBasic = () => {
    return(
        <>  
        <MUIDataTable
        title={"Lista de Empleados"}
        data={data}
        columns={columns}
        option={option}/>
        </>
        )
}