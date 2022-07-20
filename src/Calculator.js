import React, {useRef, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "./Styles";
import {Icon} from "@rneui/themed";
import {getLastResult, floatify} from "./utils/helper";

function Calculator() {

    const [firstNum, setFirstNum] = useState('');
    const [currentNum, setCurrentNum] = useState('');
    const [displayResult, setDisplayResult] = useState(null);
    const [sign, setSign] = useState('');
    const [darkMode, setDarkMode] = useState(true);
    const number = (num) => {
        setCurrentNum(currentNum + "" + num);
    }

    const ClearOne = () => {
        if (currentNum === "" && firstNum === "") return;

        setCurrentNum(currentNum.slice(0, -1))
        if (firstNum != '' && currentNum === "") {
            setSign('')
            setCurrentNum(firstNum)
            setFirstNum('')
        }

    }
    const ClearAll = () => {
        setCurrentNum('');
        setSign('');
        setFirstNum('');
    }
    const onPlusClicked = () => {
        if (!currentNum) return;
        if (sign && sign !== '+') {
            setFirstNum(getLastResult(firstNum, sign, currentNum));
        } else {
            setFirstNum(firstNum ? floatify(parseFloat(firstNum) + parseFloat(currentNum)).toString() : currentNum)
        }

        setCurrentNum('');
        setSign('+');

    }

    const onMinusClicked = () => {
        if (!currentNum) return;

        if (sign && sign !== '-') {
            setFirstNum(getLastResult(firstNum, sign, currentNum));
        } else {
            setFirstNum(firstNum ? floatify(parseFloat(firstNum) - parseFloat(currentNum)).toString() : currentNum)
        }

        setCurrentNum('');
        setSign('-');
    }

    const onTimesPress = () => {
        if (!currentNum) return;
        if (sign && sign !== '*') {
            setFirstNum(getLastResult(firstNum, sign, currentNum));
        } else {
            setFirstNum(firstNum ? floatify(parseFloat(firstNum) * parseFloat(currentNum)).toString() : currentNum)
        }

        setCurrentNum('');
        setSign('*');
    }

    const onDividePress = () => {
        if (!currentNum) return;
        if (sign && sign !== '/') {
            setFirstNum(getLastResult(firstNum, sign, currentNum));
        } else {
            setFirstNum(firstNum ? floatify(parseFloat(firstNum) / parseFloat(currentNum)).toString() : currentNum)
        }

        setCurrentNum('');
        setSign('/');
    }

    const onPercentagePress = () => {
        if (!currentNum) return;
        setSign('%');
        setFirstNum(currentNum);
        setCurrentNum('');
    }

    const onDotClicked = () => {
        if (currentNum.includes('.'))
            return;
        setCurrentNum(currentNum + '.');
        return;
    }

    const onPMPress = () => {
        if (!currentNum) return;
        setCurrentNum(currentNum * (-1))
    }

    const onEqualPress = () => {
        if (firstNum != "" && firstNum != "." && currentNum != '' && currentNum != ".") {
            let sum;
            if (sign === "+") {
                setCurrentNum(sum = floatify(parseFloat(firstNum) + parseFloat(currentNum)).toString())

            } else if (sign === "-") {
                setCurrentNum(sum = floatify(parseFloat(firstNum) - parseFloat(currentNum)).toString())

            } else if (sign === "/") {
                setCurrentNum(sum = floatify(parseFloat(firstNum) / parseFloat(currentNum)).toString());

            } else if (sign === "%") {
                setCurrentNum(sum = floatify((parseFloat(firstNum) / parseFloat(currentNum) * 100)).toString());

            } else if (sign === "*") {
                setCurrentNum(sum = floatify((parseFloat(firstNum) * parseFloat(currentNum))).toString());

            }
            setDisplayResult((displayResult || '') + ' ' + firstNum + ' ' + sign + ' ' + currentNum + ' = ' + sum + '\n')
            setSign('');
            setFirstNum('');
        } else return;


    }

    const ThemeSwitch = () => {
        setDarkMode(false);
    }

    const ThemeSwitch1 = () => {
        setDarkMode(true);
    }


    const scrollViewRef = useRef();

    return (<SafeAreaView style={styles.container}>
        <View style={darkMode ? styles.OutputView : styles.OutputViewLight}>
            <View style={darkMode ? styles.OutputView1 : styles.OutputView1Light}>
                <Text style={darkMode ? styles.TextResultsHistory : styles.LightTextResultsHistory}> Latest
                    Results: {"\n"}</Text>
                <ScrollView
                    ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: true})}
                    style={darkMode ? styles.ScrollView : styles.ScrollViewLight}>
                    <Text style={darkMode ? styles.outputNumRes1 : styles.outputNumRes1Light}>
                        {displayResult}
                    </Text>
                </ScrollView>
                <TouchableOpacity style={darkMode ? styles.LightButton : styles.LightButtonLight} onPress={ThemeSwitch}><Icon
                    name='sunny' type='ionicon' color="#fff"/></TouchableOpacity>
                <TouchableOpacity style={darkMode ? styles.DarkButton : styles.DarkButtonLight}
                                  onPress={ThemeSwitch1}><Icon name='moon' type='ionicon'/></TouchableOpacity>
            </View>
            <Text style={darkMode ? styles.outputNum : styles.outputNumLight}>
                {firstNum} {sign} {currentNum}
            </Text>
        </View>
        <View style={darkMode ? styles.InputViewDark : styles.InputView_Light}>
            <View style={styles.Rows}>
                <TouchableOpacity onPress={ClearOne}
                                  onLongPress={ClearAll}>
                    <Text style={darkMode ? styles.ArithmeticButtonsGray : styles.ArithmeticButtonsGrayLight}>
                        C
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onPMPress}>
                    <Text style={darkMode ? styles.ArithmeticButtonsGrayPM : styles.ArithmeticButtonsGrayPMLight}>
                        +/-
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPercentagePress}>
                    <Text style={darkMode ? styles.ArithmeticButtonsGray : styles.ArithmeticButtonsGrayLight}>
                        %
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDividePress}>
                    <Text style={darkMode ? styles.ArithmeticButtons : styles.ArithmeticButtonsLight}>
                        /
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Rows}>
                <TouchableOpacity onPress={() => {
                    setCurrentNum(number("7"));
                    console.log(number(7))
                }}>
                    <Text style={darkMode ? styles.NumButtons : styles.NumButtonsLight}>
                        7
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setCurrentNum(number("8"));
                    console.log(number(8))
                }}>
                    <Text style={darkMode ? styles.NumButtons : styles.NumButtonsLight}>
                        8
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setCurrentNum(number("9"));
                    console.log(number(9))
                }}>
                    <Text style={darkMode ? styles.NumButtons : styles.NumButtonsLight}>
                        9
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onTimesPress}>
                    <Text style={darkMode ? styles.ArithmeticButtons : styles.ArithmeticButtonsLight}>
                        *
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Rows}>
                <TouchableOpacity onPress={() => {
                    setCurrentNum(number("4"));
                    console.log(number(4))
                }}>
                    <Text style={darkMode ? styles.NumButtons : styles.NumButtonsLight}>
                        4
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setCurrentNum(number("5"));
                    console.log(number(5))
                }}>
                    <Text style={darkMode ? styles.NumButtons : styles.NumButtonsLight}>
                        5
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setCurrentNum(number("6"));
                    console.log(number(6))
                }}>
                    <Text style={darkMode ? styles.NumButtons : styles.NumButtonsLight}>
                        6
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onMinusClicked}>
                    <Text style={darkMode ? styles.ArithmeticButtons : styles.ArithmeticButtonsLight}>
                        -
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Rows}>
                <TouchableOpacity onPress={() => {
                    setCurrentNum(number("1"));
                    console.log(number(1));
                }}>
                    <Text style={darkMode ? styles.NumButtons : styles.NumButtonsLight}>
                        1
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setCurrentNum(number("2"));
                        console.log(number(2))
                    }}>
                    <Text style={darkMode ? styles.NumButtons : styles.NumButtonsLight}>
                        2
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setCurrentNum(number("3"));
                    console.log(number(3))
                }}>
                    <Text style={darkMode ? styles.NumButtons : styles.NumButtonsLight}>
                        3
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPlusClicked}>
                    <Text style={darkMode ? styles.ArithmeticButtons : styles.ArithmeticButtonsLight}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Rows}>
                <TouchableOpacity onPress={() => {
                    setCurrentNum(number("0"));
                    console.log(number(0))
                }}>
                    <Text style={darkMode ? styles.NumButtons0 : styles.NumButtons0Light}>
                        0
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                }}>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDotClicked}>
                    <Text style={darkMode ? styles.NumButtonsDot : styles.NumButtonsDotLight}>
                        .
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onEqualPress}>
                    <Text style={darkMode ? styles.ArithmeticButtons : styles.ArithmeticButtonsLight}>
                        =
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>)
}

export default Calculator;