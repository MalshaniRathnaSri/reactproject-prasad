import { Box } from '@mui/material';
import UserForm from "./UserForm";
import UserTable from './UserTable'

const users = [
    {
        id: 1,
        name: 'Welikandage'
    },
    {
        id: 2,
        name: 'Malshani'
    },
    {
        id: 3,
        name: 'RathnaSri'
    }
]

const User = () =>{
    return(
        <Box 
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px'
            }}
        >
            <UserForm/>
            <UserTable rows = {users}/>
        </Box>
    );
}
export default User;