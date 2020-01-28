/**
 * Sample React Native Form Validation App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import {TextInput} from 'react-native-paper';
import {Container, Content, Button} from 'native-base';

export default class App extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      number: '',
      date: '',
    };
  }

  _onPressButton = () => {
    // Call ValidationComponent validate method
    this.validate({
      name: {minlength: 3, maxlength: 7, required: true},
      email: {email: true},
      number: {numbers: true},
      date: {date: 'YYYY-MM-DD'},
    });
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
        <StatusBar backgroundColor="#34495E" barStyle="light-content" />
        <Container>
          <Text style={styles.h1}>Form Validation</Text>
          <Row size={12} style={styles.Row}>
            <Col sm={12} md={8} lg={6}>
              <TextInput
                style={styles.textInput}
                ref="name"
                label="Name"
                onChangeText={name => this.setState({name})}
                value={this.state.name}
              />
            </Col>
          </Row>
          <Row size={12} style={styles.Row}>
            <Col sm={12} md={8} lg={6}>
              <TextInput
                style={styles.textInput}
                ref="email"
                label="Email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}
              />
            </Col>
          </Row>
          <Row size={12} style={styles.Row}>
            <Col sm={12} md={8} lg={6}>
              <TextInput
                style={styles.textInput}
                ref="number"
                label="Number"
                onChangeText={number => this.setState({number})}
                value={this.state.number}
              />
            </Col>
          </Row>
          <Row size={12} style={styles.Row}>
            <Col sm={12} md={8} lg={6}>
              <TextInput
                style={styles.textInput}
                ref="date"
                label="Date"
                onChangeText={date => this.setState({date})}
                value={this.state.date}
              />
            </Col>
          </Row>
          <Row size={12} style={styles.Row}>
            <Col sm={12} style={{marginLeft: 'auto'}}>
              <Button onPress={() => this._onPressButton()}>
                <Text
                  style={{color: 'white', textAlign: 'center', width: '100%'}}>
                  Submit
                </Text>
              </Button>
            </Col>
          </Row>

          {this.isFieldInError('date') &&
            this.getErrorsInField('date').map(errorMessage => (
              <Text>{errorMessage}</Text>
            ))}

          <Text>{this.getErrorMessages()}</Text>
        </Container>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    fontFamily: 'sans-serif-medium',
  },
  Row: {
    padding: 10,
    margin: 10,
  },
  textInput: {
    backgroundColor: 'white',
    elevation: 10,
  },
});
