/*
Navicat MySQL Data Transfer

Source Server         : sipdlocal
Source Server Version : 50505
Source Host           : localhost:1005
Source Database       : dbsppd

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-08-25 12:14:30
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `m_billing`
-- ----------------------------
DROP TABLE IF EXISTS `m_billing`;
CREATE TABLE `m_billing` (
  `BILLINGCODE` varchar(4) DEFAULT NULL,
  `BILLINGAMOUNT` decimal(12,0) DEFAULT NULL,
  `PAYMENTSTATUS` int(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of m_billing
-- ----------------------------
INSERT INTO m_billing VALUES ('1111', '1000', '0');

-- ----------------------------
-- Table structure for `t_billing_trx`
-- ----------------------------
DROP TABLE IF EXISTS `t_billing_trx`;
CREATE TABLE `t_billing_trx` (
  `BILLINGCODE` varchar(4) DEFAULT NULL,
  `AMOUNT` decimal(12,0) DEFAULT NULL,
  `NTPN` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_billing_trx
-- ----------------------------
