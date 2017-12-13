import '../assets/css/flexboxgrid.min.css';
import React from 'react';
import { inject } from 'mobx-react';
import '../assets/css/Main.css';
import Section from '../components/Section';
import Image from '../components/Image';
import Color from '../components/Color';
import MenuItem from '../components/MenuItem';
import MenuSubItem from '../components/MenuSubItem';
class Main extends React.Component {
  setEmulationMode(checked) {
    this.props.store.set("emulation", !checked);
    this.forceUpdate();
  }
  setAllowCamMode(checked) {
    this.props.store.set("allow_cam", checked);
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <header>
          <div className="row">
              <div className="col-lg-6 row menu">
                <div className="app_name">Esmeralda</div>
                <MenuItem name={"Arxiu"}>
                  <MenuSubItem name={"Obrir Paleta"} />
                  <MenuSubItem name={"Desar Paleta"} />
                </MenuItem>
                <MenuItem name={"Editar"}>
                <MenuSubItem name={"Copiar"} />
                <MenuSubItem name={"Enganxar"} />
                </MenuItem>
                <MenuItem name={"Visió"}>
                  <MenuSubItem name={"Obrir"} />
                </MenuItem>
                <MenuItem name={"AI"}>
                <MenuSubItem name={"Obrir"} />
              </MenuItem>
              <MenuItem name={"Development"}>
                <MenuSubItem name={"Emulació"} checked={false} checkable={true} do={this.setEmulationMode.bind(this)} />
                <MenuSubItem name={"Només microscopis"} checked={true} checkable={true} do={this.setAllowCamMode.bind(this)} />
              </MenuItem>
              </div>
              <div className="col-lg-6 row end-lg menu">
              </div>
          </div>
        </header>
        <main>
          <div className="row">
              <div className="col-lg-9">
                <Image />
              </div>
              <div className="col-lg-3 controls">
                <Section text={"Selecció d'àrees de color"} >
                  <Color />
                  <Color />
                </Section>
              </div>
          </div>
        </main>
      </div>
    );
  }
}

export default inject('store')(Main);
