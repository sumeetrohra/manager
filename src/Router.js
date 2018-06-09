import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { employeeClear } from './actions';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene hideNavBar>
                <Scene key="auth" initial>
                    <Scene
                    key="login"
                    component={LoginForm}
                    title="Please Login"
                    titleStyle={styles.titleStyle}
                    hideNavBar={false}
                    initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    type="reset"
                    titleStyle={styles.titleStyle}
                    hideNavBar={false}
                    rightTitle="ADD"
                    onRight={() => Actions.employeeCreate()}
                    rightButtonTextStyle={styles.buttonTitleStyle}
                    />
                    <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Create Employee"
                    titleStyle={{ flex: 1 }}
                    />
                    <Scene
                    key="employeeEdit"
                    component={EmployeeEdit}
                    title="Edit Employee"
                    titleStyle={styles.titleStyle}
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

const styles = {
    titleStyle: {
        flex: 1,
    },
    buttonTitleStyle: {
        paddingLeft: 5
    }
};

export default RouterComponent;
