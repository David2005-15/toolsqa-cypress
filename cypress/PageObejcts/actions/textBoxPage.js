import { CommonAssertions } from "../commonUsefulCommands/assertions";
import { CommonActions } from "../commonUsefulCommands/commands";


export const TextBoxPage = () => {
    return {
        do: () => {
            return CommonActions()
        },
        specy: () => {
            return{
                fillFullName: (selector, info) => {
                    CommonActions().fillInField(selector, info)
                },

                fillEmail: (selector, info) => {
                    CommonActions().fillInField(selector, info)
                }
            }
        },
        assert: () => {
            return CommonAssertions()
        }
    }
}