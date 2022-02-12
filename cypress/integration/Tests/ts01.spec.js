import { MainPage } from "../../PageObejcts/actions/mainPage";
import { CommonAssertions } from "../../PageObejcts/commonUsefulCommands/assertions";
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
        CommonActions().clickOnButton(".category-cards > :nth-child(1)")
    });

    it('Test Case 01',function (){
        MainPage().do().clickOn(MainPageSelectors().selector.TextBox)
        TextBoxPage().assert().must('#submit').beVisible()
        TextBoxPage().specy().fillFullName(TextBoxPageSelectors.selector.FullName, "Full Name")
        TextBoxPage().specy().fillEmail(TextBoxPageSelectors.selector.Email, "mail@main.com")
        TextBoxPage().specy().fillAddress(TextBoxPageSelectors.selector.CurrentAddress, "My Address")
        TextBoxPage().specy().fillPermanentAddress(TextBoxPageSelectors.selector.PermanentAddress, "My Permanent Address")
        TextBoxPage().do().clickOnButton(TextBoxPageSelectors.selector.Submit)
        TextBoxPage().assert().must('#name').beVisible()
    });

    it('Test Case 02', function (){
        MainPage().do().clickOn(MainPageSelectors().selector.CheckBox)
        CheckBoxPage().assert().must('.rct-title').beVisible()
        CheckBoxPage().specy().checkBox(CheckBoxPageSelectors.selector.CheckBox)
        CheckBoxPage().do().clickOnButton(CheckBoxPageSelectors.selector.PlusButton)
        CheckBoxPage().assert().must('#result').beVisible()
    });

    it('Test Case 03', function () {
        MainPage().do().clickOn(MainPageSelectors().selector.RadioButton)
        RadioButtonPage().do().clickOn(RadioButtonSelectors().selector.RadioButton)
        CommonAssertions().must('.mt-3').beVisible()
    });

    it('Test Case 04', function () {
        MainPage().do().clickOn(MainPageSelectors().selector.WebTables)
        WebTablesPage().do().clickOn(WebTablesPageSelectors().selector.DeleteButton)
        CommonAssertions().must('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').haveText()
    });
});