import { CommonAssertions } from "../commonUsefulCommands/assertions";
import { CommonActions } from "../commonUsefulCommands/commands";
import { TextBoxPageSelectors } from "../selectors/textBoxPageSelectors";


export const TextBoxPage = () => {
    return {
        do: () => {
            return CommonActions()
        },
        specy: () => {
            return{
                fillForm: (selector, name = '', email = '', address = '', perAddress = '') => {
                    CommonActions().fillInField(`${selector} ${TextBoxPageSelectors.selector.FullName}`, name)
                    CommonActions().fillInField(`${selector} ${TextBoxPageSelectors.selector.Email}`, email)
                    CommonActions().fillInField(`${selector} ${TextBoxPageSelectors.selector.CurrentAddress}`, address)
                    CommonActions().fillInField(`${selector} ${TextBoxPageSelectors.selector.PermanentAddress}`, perAddress)
                }
            }
        },
        assert: () => {
            return CommonAssertions()
        }
    }
}