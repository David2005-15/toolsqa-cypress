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
                  CommonActions().clickOn(selector)
              }
          }
        },

        assert: () => {
          return CommonAssertions()
        }
    }
}