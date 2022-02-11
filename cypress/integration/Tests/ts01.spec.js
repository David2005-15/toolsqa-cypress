import { MainPage } from "../../PageObejcts/mainPage";
import { CommonAssertions } from "../../PageObejcts/commonUsefulCommands/assertions";
import { CommonActions } from "../../PageObejcts/commonUsefulCommands/commands";
import { TextBoxPage } from "../../PageObejcts/textBoxPage";
import { MainPageSelectors } from "../../PageObejcts/selectors/mainPageSelectors";
import { TextBoxPageSelectors } from "../../PageObejcts/selectors/textBoxPageSelectors";
import { CheckBoxPage } from "../../PageObejcts/checkBoxPage";
import { CheckBoxPageSelectors } from "../../PageObejcts/selectors/checkBoxPageSelectors";
import { RadioButtonPage } from "../../PageObejcts/radioButtonPage";
import { RadioButtonSelectors } from "../../PageObejcts/selectors/radioButtonSelectors";


describe('TestSuit01', function () {
    beforeEach(function (){
        cy.visit("https://demoqa.com/")
        CommonActions().clickOnButton(".category-cards > :nth-child(1)")
    });

    it('Test Case 01',function (){
        MainPage().do().clickOn(MainPageSelectors().selector.TextBox)
        CommonAssertions().must('#submit').beVisible()
        TextBoxPage().do().typeIn(TextBoxPageSelectors().selector.FullName, "Full Name")
        TextBoxPage().do().typeIn(TextBoxPageSelectors().selector.Email, "test@test.com")
        TextBoxPage().do().typeIn(TextBoxPageSelectors().selector.CurrentAddress, "My Address")
        TextBoxPage().do().typeIn(TextBoxPageSelectors().selector.PermanentAddress, "Permanent Address")

        CommonActions().clickOnButton(TextBoxPageSelectors().selector.Submit)

        CommonAssertions().must('#name').beVisible()
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
});