import { AppPage } from './app.po';
import { browser, logging, element, by, protractor } from 'protractor';
import { ConstantsE2E } from './constants.e2e';
import { Constants } from '../../src/app/utils/constants.util';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should insert motorcycle and list in the table', () => {
    page.navigateTo();
    // registrar ingreso de moto
    element(by.id(ConstantsE2E.ID_BOTON_REGISTRAR_MOTO)).click();
    expect(element(by.id(ConstantsE2E.ID_INPUT_REGISTRO_TIPO)).getAttribute("value")).toEqual(Constants.TIPO_VEHICULO_MOTO);
    element(by.id(ConstantsE2E.ID_INPUT_REGISTRO_PLACA)).sendKeys(ConstantsE2E.PLACA_MOTO_1_TEST);
    element(by.id(ConstantsE2E.ID_INPUT_REGISTRO_CILINDRAJE)).sendKeys(ConstantsE2E.CILINDRAJE_MOTO_TEST);
    element(by.id(ConstantsE2E.ID_BOTON_REGISTRAR)).click();
    // validar valores en la tabla
    element(by.id(ConstantsE2E.ID_INPUT_BUSCAR)).sendKeys(ConstantsE2E.PLACA_MOTO_1_TEST);
    expect(element(by.className(ConstantsE2E.CLASS_LABEL_TIPO_TABLA)).getText()).toEqual(Constants.TIPO_VEHICULO_MOTO);
    expect(element(by.className(ConstantsE2E.CLASS_LABEL_PLACA_TABLA)).getText()).toEqual(ConstantsE2E.PLACA_MOTO_1_TEST);
    expect(element(by.className(ConstantsE2E.CLASS_LABEL_FECHA_INICIO_TABLA)).getText()).not.toBe('');
    // registrar salida
    element(by.className(ConstantsE2E.CLASS_BOTON_REGISTRAR_SALIDA)).click();
  });

  it('should insert car and list in the table', () => {
    page.navigateTo();
    // registrar ingreso de carro
    element(by.id(ConstantsE2E.ID_BOTON_REGISTRAR_CARRO)).click();
    expect(element(by.id(ConstantsE2E.ID_INPUT_REGISTRO_TIPO)).getAttribute("value")).toEqual(Constants.TIPO_VEHICULO_CARRO);
    element(by.id(ConstantsE2E.ID_INPUT_REGISTRO_PLACA)).sendKeys(ConstantsE2E.PLACA_CARRO_1_TEST);
    expect(element(by.id(ConstantsE2E.ID_INPUT_REGISTRO_CILINDRAJE)).isPresent()).toBe(false);
    element(by.id(ConstantsE2E.ID_BOTON_REGISTRAR)).click();
    // validar valores en la tabla
    element(by.id(ConstantsE2E.ID_INPUT_BUSCAR)).sendKeys(ConstantsE2E.PLACA_CARRO_1_TEST);
    expect(element(by.className(ConstantsE2E.CLASS_LABEL_TIPO_TABLA)).getText()).toEqual(Constants.TIPO_VEHICULO_CARRO);
    expect(element(by.className(ConstantsE2E.CLASS_LABEL_PLACA_TABLA)).getText()).toEqual(ConstantsE2E.PLACA_CARRO_1_TEST);
    expect(element(by.className(ConstantsE2E.CLASS_LABEL_FECHA_INICIO_TABLA)).getText()).not.toBe('');
    //registrar salida
    element(by.className(ConstantsE2E.CLASS_BOTON_REGISTRAR_SALIDA)).click();
  });

  it('should mark exit of vehicule and pay correct value', () => {
    page.navigateTo();
    // ingresar ingreso vehiculo
    element(by.id(ConstantsE2E.ID_BOTON_REGISTRAR_CARRO)).click();
    element(by.id(ConstantsE2E.ID_INPUT_REGISTRO_PLACA)).sendKeys(ConstantsE2E.PLACA_CARRO_2_TEST);
    element(by.id(ConstantsE2E.ID_BOTON_REGISTRAR)).click();
    // registrar salida
    element(by.id(ConstantsE2E.ID_INPUT_BUSCAR)).sendKeys(ConstantsE2E.PLACA_CARRO_2_TEST);
    element(by.className(ConstantsE2E.CLASS_BOTON_REGISTRAR_SALIDA)).click();
    // validar datos de pago
    expect(element(by.id(ConstantsE2E.ID_LABEL_PLACA_PAGO)).getText()).toEqual(ConstantsE2E.PLACA_CARRO_2_TEST);
    expect(element(by.id(ConstantsE2E.ID_LABEL_FECHA_INICIO_PAGO)).getText()).not.toBe('');
    expect(element(by.id(ConstantsE2E.ID_LABEL_FECHA_FIN_PAGO)).getText()).not.toBe('');
    expect(element(by.id(ConstantsE2E.ID_LABEL_VALOR_PAGO)).getText()).toEqual(ConstantsE2E.VALOR_PAGAR_CARRO_TEST);
  });

  it('should not permit insert one vehicule two times', () => {
    page.navigateTo();
    // ingresar vehiculos
    element(by.id(ConstantsE2E.ID_BOTON_REGISTRAR_CARRO)).click();
    element(by.id(ConstantsE2E.ID_INPUT_REGISTRO_PLACA)).sendKeys(ConstantsE2E.PLACA_CARRO_2_TEST);
    element(by.id(ConstantsE2E.ID_BOTON_REGISTRAR)).click();
    element(by.id(ConstantsE2E.ID_BOTON_REGISTRAR_CARRO)).click();
    element(by.id(ConstantsE2E.ID_INPUT_REGISTRO_PLACA)).sendKeys(ConstantsE2E.PLACA_CARRO_2_TEST);
    element(by.id(ConstantsE2E.ID_BOTON_REGISTRAR)).click();
    expect(element(by.id(ConstantsE2E.ID_LABEL_MENSAJE_ERROR)).getText()).not.toBe('');
    // registrar salida
    element(by.id(ConstantsE2E.ID_BOTON_CANCELAR)).click();
    element(by.id(ConstantsE2E.ID_INPUT_BUSCAR)).sendKeys(ConstantsE2E.PLACA_CARRO_2_TEST);
    element(by.className(ConstantsE2E.CLASS_BOTON_REGISTRAR_SALIDA)).click();
  });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
