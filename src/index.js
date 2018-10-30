import "./dpstyle.css";
import React from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import DPAppBar from "./appBar";
import "./styles.css";
import { createMuiTheme } from "@material-ui/core/styles";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ReportIcon from "@material-ui/icons/Print";
import EmployeeIcon from "@material-ui/icons/People";
import WorkloadIcon from "@material-ui/icons/DateRange";
import PointIcon from "@material-ui/icons/HowToVote";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <DPAppBar />
          </Grid>
        </Grid>
        <Router>
          <Grid container spacing={24}>
            <Grid xs={12} sm={3} item>
              <Link className="dpLink" to="/importar">
                <Paper>
                  <CloudUploadIcon
                    className="dpLink"
                    style={{ fontSize: 50 }}
                  />
                  <Typography variant="h7">Importar</Typography>
                </Paper>
              </Link>
            </Grid>

            <Grid xs={12} sm={3} item>
              <Link className="dpLink" to="/pontos">
                <Paper>
                  <PointIcon style={{ fontSize: 50 }} />
                  <Typography variant="h7">Pontos</Typography>
                </Paper>
              </Link>
            </Grid>
            <Grid xs={12} sm={3} item>
              <Link className="dpLink" to="/funcionarios">
                <Paper>
                  <EmployeeIcon style={{ fontSize: 50 }} />
                  <Typography variant="h7">Funcionários</Typography>
                </Paper>
              </Link>
            </Grid>
            <Grid xs={12} sm={3} item>
              <Link className="dpLink" to="/cargaHoraria">
                <Paper>
                  <WorkloadIcon style={{ fontSize: 50 }} />
                  <Typography variant="h7">Carga Horária</Typography>
                </Paper>
              </Link>
            </Grid>

            <Grid xs={12} sm={3} item>
              <Link className="dpLink" to="/relatorios">
                <Paper>
                  <ReportIcon style={{ fontSize: 50 }} />
                  <Typography variant="h7">Relatórios</Typography>
                </Paper>
              </Link>
            </Grid>
          </Grid>
        </Router>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
