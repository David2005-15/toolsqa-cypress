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

    it.only('Test Case 01',function (){
        MainPage().do().clickOn(MainPageSelectors().selector.TextBox)
        // TextBoxPage().must('#submit').beVisible()
        TextBoxPage().assert().must('#submit').beVisible()
        // TextBoxPage().fillInField(TextBoxPageSelectors.selector.FullName, "Full Name")
        // TextBoxPage().do().fillInField(TextBoxPageSelectors.selector.Email, "test@email.com")
        // TextBoxPage().do().fillInField(TextBoxPageSelectors.selector.CurrentAddress, "My Address")
        // TextBoxPage().do().fillInField(TextBoxPageSelectors.selector.PermanentAddress, "Permanent Address")
        // TextBoxPage().do().clickOnButton(TextBoxPageSelectors.selector.Submit)
        // TextBoxPage().assert().must().beVisible("#name")
        TextBoxPage().specy().fillFullName(TextBoxPageSelectors.selector.FullName, "Full Name")
        TextBoxPage().specy().fillEmail(TextBoxPageSelectors.selector.Email, "mail@main.com")
        // CommonActions().clickOnButton(TextBoxPageSelectors.selector.Submit)

        // CommonAssertions().must('#name').beVisible()
    });

    it('Test Case 02', function (){
        MainPage().do().clickOn(MainPageSelectors().selector.CheckBox)
        CommonAssertions().must('.rct-title').beVisible()
        CheckBoxPage().do().clickOn(CheckBoxPageSelectors().selector.CheckBox)
        CheckBoxPage().do().clickOn(CheckBoxPageSelectors().selector.PlusButton)
        CommonAssertions().must('#result').beVisible()
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