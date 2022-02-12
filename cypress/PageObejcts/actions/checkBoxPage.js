import {CommonActions} from "../commonUsefulCommands/commands";
import {CommonAssertions} from "../commonUsefulCommands/assertions";

export  const CheckBoxPage = () => {
    return {
        do: () => {
            return CommonActions()
        },

        specy: () => {
          return {
              checkBox: (selector) => {
                  CommonActions().clickOnButton(selector)
              }
          }
        },

        assert: () => {
          return CommonAssertions()
        }
    }
}