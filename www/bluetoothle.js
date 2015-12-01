var bluetoothle = {
        log                      : function( log )
        {
            console.log( log )
        },
        initialize               : function( request, statusReceiver, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "initialize", [ { request: (typeof request != "undefined" ? request : true), statusReceiver: (typeof statusReceiver != "undefined" ? statusReceiver : true ) } ] );
        },
        enable                   : function( onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "enable", [] );
        },
        disable                  : function( onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "disable", [] );
        },
        startScan                : function( serviceUuids, allowDuplicates, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "startScan", [ { serviceUuids: (typeof serviceUuids != "undefined" ? serviceUuids : []), allowDuplicates: (typeof allowDuplicates != "undefined" ? allowDuplicates : false) } ] );
        },
        stopScan                 : function( onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "stopScan", [] );
        },
        retrieveConnected        : function( serviceUuids, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "retrieveConnected", [ { serviceUuids: (typeof serviceUuids != "undefined" ? serviceUuids : [] ) } ] );
        },
        connect                  : function( address, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "connect", [ { address: (typeof address != "undefined" ? address : '') } ] );
        },
        reconnect                : function( address, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "reconnect", [ { address: (typeof address != "undefined" ? address : '') } ] );
        },
        disconnect               : function( address, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "disconnect", [ { address: (typeof address != "undefined" ? address : '') } ] );
        },
        close                    : function( address, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "close", [ { address: (typeof address != "undefined" ? address : '') } ] );
        },
        discover                 : function( address, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "discover", [ { address: (typeof address != "undefined" ? address : '') } ] );
        },
        services                 : function( address, serviceUuids, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "services", [ { address: (typeof address != "undefined" ? address : ''), serviceUuids: (typeof serviceUuids != "undefined" ? serviceUuids : [] ) } ] );
        },
        characteristics          : function( address, serviceUuid, characteristicUuids, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "characteristics", [ { address: (typeof address != "undefined" ? address : ''), serviceUuid: (typeof serviceUuid != "undefined" ? serviceUuid : ''), characteristicUuids: (typeof characteristicUuids != "undefined" ? characteristicUuid : []) } ] );
        },
        descriptors              : function( address, serviceUuid, characteristicUuid, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "descriptors", [ { address: (typeof address != "undefined" ? address : ''), serviceUuid: (typeof serviceUuid != "undefined" ? serviceUuid : ''), characteristicUuid: (typeof characteristicUuid != "undefined" ? characteristicUuid : '') } ] );
        },
        read                     : function( address, serviceUuid, characteristicUuid, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "read", [ { address: (typeof address != "undefined" ? address : ''), serviceUuid: (typeof serviceUuid != "undefined" ? serviceUuid : ''), characteristicUuid: (typeof characteristicUuid != "undefined" ? characteristicUuid : '') } ] );
        },
        subscribe                : function( address, serviceUuid, characteristicUuid, isNotification, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "subscribe", [ { address: (typeof address != "undefined" ? address : ''), serviceUuid: (typeof serviceUuid != "undefined" ? serviceUuid : ''), characteristicUuid: (typeof characteristicUuid != "undefined" ? characteristicUuid : ''), isNotification: (typeof isNotification != "undefined" ? isNotification : true ) } ] );
        },
        unsubscribe              : function( address, serviceUuid, characteristicUuid, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "unsubscribe", [ { address: (typeof address != "undefined" ? address : ''), serviceUuid: (typeof serviceUuid != "undefined" ? serviceUuid : ''), characteristicUuid: (typeof characteristicUuid != "undefined" ? characteristicUuid : '') } ] );
        },
        write                    : function( string, serviceUuid, characteristicUuid, type, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "write", [ { value: atob( (typeof string != "undefined" ? string : '') ), serviceUuid: (typeof serviceUuid != "undefined" ? serviceUuid : ''), characteristicUuid: (typeof characteristicUuid != "undefined" ? characteristicUuid : ''), type: (typeof type != "undefined" ? type : '' ) } ] );
        },
        readDescriptor           : function( address, serviceUuid, characteristicUuid, descriptorUuid, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "readDescriptor", [ { address: (typeof address != "undefined" ? address : ''), serviceUuid: (typeof serviceUuid != "undefined" ? serviceUuid : ''), characteristicUuid: (typeof characteristicUuid != "undefined" ? characteristicUuid : ''), descriptorUuid: (typeof descriptorUuid != "undefined" ? descriptorUuid : '' ) } ] );
        },
        writeDescriptor          : function( string, serviceUuid, characteristicUuid, descriptorUuid, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "writeDescriptor", [ { value: atob( (typeof string != "undefined" ? string : '') ), serviceUuid: (typeof serviceUuid != "undefined" ? serviceUuid : ''), characteristicUuid: (typeof characteristicUuid != "undefined" ? characteristicUuid : ''), descriptorUuid: (typeof descriptorUuid != "undefined" ? descriptorUuid : '' ) } ] );
        },
        rssi                     : function( address, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "rssi", [ { address: (typeof address != "undefined" ? address : '') } ] );
        },
        mtu                      : function( address, mtu, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "mtu", [ { address: (typeof address != "undefined" ? address : ''), mtu: (typeof mtu != "undefined" ? mtu : 0 ) } ] );
        },
        isInitialized            : function( onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "isInitialized", [] );
        },
        isEnabled                : function( onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "isEnabled", [] );
        },
        isScanning               : function( onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "isScanning", [] );
        },
        isConnected              : function( address, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "isConnected", [ { address: (typeof address != "undefined" ? address : '') } ] );
        },
        isDiscovered             : function( address, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "isDiscovered", [ { address: (typeof address != "undefined" ? address : '') } ] );
        },
        requestConnectionPriority: function( address, connectionPriority, onPass, onFail )
        {
            cordova.exec( (typeof onPass != "undefined" ? onPass : this.log), (typeof onFail != "undefined" ? onFail : this.log), "BluetoothLePlugin", "requestConnectionPriority", [ { address: (typeof address != "undefined" ? address : ''), connectionPriority: (typeof connectionPriority != "undefined" ? connectionPriority : 'balanced' ) } ] );
        },
        encodedStringToBytes     : function( string )
        {
            var data = atob( string );
            var bytes = new Uint8Array( data.length );
            for ( var i = 0; i < bytes.length; i++ ) {
                bytes[ i ] = data.charCodeAt( i );
            }
            return bytes;
        },
        bytesToEncodedString     : function( bytes )
        {
            return btoa( String.fromCharCode.apply( null, bytes ) );
        },
        encodedStringToString    : function( string )
        {
            return atob( string );
        },
        stringToEncodedString    : function( string )
        {
                return btoa( string );
        },
        encodedStringToBits      : function( string )
        {
            var o = [];
            for ( var d = 0; d < atob( string ).length; d++ )o.push( atob( string ).charCodeAt( d ).toString( 2 ) );
            for ( var b = 0; b < o.length; b++ )while ( o[ b ].length % 8 )o[ b ] = '0' + o[ b ];
            return o;
        },
        stringToBits             : function( string )
        {
            var o = [];
            for ( var d = 0; d < string.length; d++ )o.push( string.charCodeAt( d ).toString( 2 ) );
            for ( var b = 0; b < o.length; b++ )while ( o[ b ].length % 8 )o[ b ] = '0' + o[ b ];
            return o;
        },
        bitsToEncodedString      : function( bits )
        {
            var string = '';
            for ( var i = 0; i < bits.length; i++ ) string += String.fromCharCode( parseInt( bits[ i ], 2 ) );
            return btoa( string );
        },
        bitsToString             : function( bits )
        {
            var string = '';
            for ( var i = 0; i < bits.length; i++ ) string += String.fromCharCode( parseInt( bits[ i ], 2 ) );
            return string;
        },
        stringToBytes            : function( string )
        {
            var bytes = new ArrayBuffer( string.length * 2 );
            var bytesUint16 = new Uint16Array( bytes );
            for ( var i = 0; i < string.length; i++ ) {
                bytesUint16[ i ] = string.charCodeAt( i );
            }
            return new Uint8Array( bytesUint16 );
        },
        bytesToString            : function( bytes )
        {
            return String.fromCharCode.apply( null, new Uint16Array( bytes ) );
        },
        bitsToBytes              : function( bits )
        {
            var bytes = [];
            for ( var i = 0; i < bits.length; i++ )bytes.push( parseInt( bits[ i ], 2 ) );
            return bytes;
        },
        bytesToBits              : function( bytes )
        {
            var string = String.fromCharCode.apply( null, new Uint16Array( bytes ) );
            var o = [];
            for ( var d = 0; d < string.length; d++ )o.push( string.charCodeAt( d ).toString( 2 ) );
            for ( var b = 0; b < o.length; b++ )while ( o[ b ].length % 8 )o[ b ] = '0' + o[ b ];
            return o;
        }
    };
module.exports = bluetoothle;
