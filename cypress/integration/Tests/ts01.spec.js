import { MainPage } from "../../PageObejcts/actions/mainPage";
import { CommonActions } from "../../PageObejcts/commonUsefulCommands/commands";
import { TextBoxPage } from "../../PageObejcts/actions/textBoxPage";
import { MainPageSelectors } from "../../PageObejcts/selectors/mainPageSelectors";
import { TextBoxPageSelectors } from "../../PageObejcts/selectors/textBoxPageSelectors";
import { CheckBoxPage } from "../../PageObejcts/actions/checkBoxPage";
import { CheckBoxPageSelectors } from "../../PageObejcts/selectors/checkBoxPageSelectors";
import { RadioButtonPage } from "../../PageObejcts/actions/radioButtonPage";
import { RadioButtonSelectors } from "../../PageObejcts/selectors/radioButtonSelectors";
import { WebTablesPage } from "../../PageObejcts/actions/webTablesPage";
import { WebTablesPageSelectors } from "../../PageObejcts/selectors/webTablesPageSelectors";



describe('TestSuit01', function () {
    beforeEach(function (){
        cy.visit("https://demoqa.com/")
        CommonActions().clickOn(".category-cards > :nth-child(1)")
    });

    it('Test Case 01',function (){
        const user = TextBoxPageSelectors.selector
        MainPage().do().clickOn(MainPageSelectors().selector.TextBox)
        TextBoxPage().assert().must(user.Submit).beVisible()
        TextBoxPage().specy().fillForm(user.Form, 'John', 'john@gmail.com','Street 2', '2/78')
        TextBoxPage().do().clickOn(user.Submit)
        TextBoxPage().assert().must('#name').beVisible()
    });

    it('Test Case 02', function (){
        MainPage().do().clickOn(MainPageSelectors().selector.CheckBox)
        CheckBoxPage().assert().must('.rct-title').beVisible()
        CheckBoxPage().specy().checkBox(CheckBoxPageSelectors.selector.CheckBox)
        CheckBoxPage().do().clickOn(CheckBoxPageSelectors.selector.PlusButton)
        CheckBoxPage().assert().must('#result').beVisible()
    });

    it('Test Case 03', function () {
        MainPage().do().clickOn(MainPageSelectors().selector.RadioButton)
        RadioButtonPage().specy().check(RadioButtonSelectors().selector.RadioButton)
        RadioButtonPage().assert().must('.mt-3').beVisible()
    });

    it('Test Case 04', function () {
        MainPage().do().clickOn(MainPageSelectors().selector.WebTables)
        // WebTablesPage().do().clickOn(WebTablesPageSelectors().selector.DeleteButton)
        // CommonAssertions().must('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').haveText()

        WebTablesPage().specy().deleteTable(WebTablesPageSelectors().selector.DeleteButton)
        WebTablesPage().assert().must('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').haveText()
    });
});