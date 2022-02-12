import {CommonActions} from "../commonUsefulCommands/commands";
import {CommonAssertions} from "../commonUsefulCommands/assertions";

export const WebTablesPage = () => {
    return{
        do: () => {
            return CommonActions()
        },

        specy: () => {
          return{
              deleteTable: (selector) => {
                  CommonActions().clickOn(selector)
              }
          }
        },

        assert: () => {
            return CommonAssertions()
        }
    }
}