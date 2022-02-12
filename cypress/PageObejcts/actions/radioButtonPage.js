import {CommonActions} from "../commonUsefulCommands/commands";
import {CommonAssertions} from "../commonUsefulCommands/assertions";

export const RadioButtonPage = () => {
    return {
        do: () => {
            return CommonActions()
        },

        specy: () => {
            return {
                check: (selector) => {
                    CommonActions().clickOn(selector)
                }
            }
        },

        assert: () => {
            return CommonAssertions()
        }
    }
}