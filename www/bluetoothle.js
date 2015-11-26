var bluetoothleName = "BluetoothLePlugin";
var bluetoothle = {
    log( log )
    {
        console.log( log );
        this.initialize()
    },
    initialize( request, statusReceiver, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "initialize", [ { request: request || true, statusReceiver: statusReceiver || true } ] );
    },
    enable( onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "enable", [] );
    },
    disable( onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "disable", [] );
    },
    startScan( serviceUuids, allowDuplicates, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "startScan", [ { serviceUuids: serviceUuids || [], allowDuplicates: allowDuplicates || false } ] );
    },
    stopScan( onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "stopScan", [] );
    },
    retrieveConnected( serviceUuids, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "retrieveConnected", [ { serviceUuids: serviceUuids || [] } ] );
    },
    connect( address, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "connect", [ { address: address || '' } ] );
    },
    reconnect( address, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "reconnect", [ { address: address || '' } ] );
    },
    disconnect( address, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "disconnect", [ { address: address || '' } ] );
    },
    close( address, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "close", [ { address: address || '' } ] );
    },
    discover( address, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "discover", [ { address: address || '' } ] );
    },
    services( address, serviceUuids, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "services", [ { address: address || '', serviceUuids: serviceUuids || [] } ] );
    },
    characteristics( address, serviceUuid, characteristicUuids, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "characteristics", [ { address: address || '', serviceUuid: serviceUuid || '', characteristicUuids: characteristicUuids || [] } ] );
    },
    descriptors( address, serviceUuid, characteristicUuid, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "descriptors", [ { address: address || '', serviceUuid: serviceUuid || '', characteristicUuid: characteristicUuid || '' } ] );
    },
    read( address, serviceUuid, characteristicUuid, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "read", [ { address: address || '', serviceUuid: serviceUuid || '', characteristicUuid: characteristicUuid || '' } ] );
    },
    subscribe( address, serviceUuid, characteristicUuid, isNotification, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "subscribe", [ { address: address || '', serviceUuid: serviceUuid || '', characteristicUuid: characteristicUuid || '', isNotification: isNotification || true } ] );
    },
    unsubscribe( address, serviceUuid, characteristicUuid, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "unsubscribe", [ { address: address || '', serviceUuid: serviceUuid || '', characteristicUuid: characteristicUuid || '' } ] );
    },
    write( string, serviceUuid, characteristicUuid, type, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "write", [ { value: atob( string || '' ), serviceUuid: serviceUuid || '', characteristicUuid: characteristicUuid || '', type: type || '' } ] );
    },
    readDescriptor( address, serviceUuid, characteristicUuid, descriptorUuid, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "readDescriptor", [ { address: address || '', serviceUuid: serviceUuid || '', characteristicUuid: serviceUuid || '', descriptorUuid: descriptorUuid || '' } ] );
    },
    writeDescriptor( string, serviceUuid, characteristicUuid, descriptorUuid, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "writeDescriptor", [ { value: atob( string || '' ), serviceUuid: serviceUuid || '', characteristicUuid: characteristicUuid || '', descriptorUuid: descriptorUuid || '' } ] );
    },
    rssi( address, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "rssi", [ { address: address || '' } ] );
    },
    mtu( address, mtu, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "mtu", [ { address: address || '', mtu: mtu || 0 } ] );
    },
    isInitialized( onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "isInitialized", [] );
    },
    isEnabled( onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "isEnabled", [] );
    },
    isScanning( onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "isScanning", [] );
    },
    isConnected( address, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "isConnected", [ { address: address || '' } ] );
    },
    isDiscovered( address, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "isDiscovered", [ { address: address | '' } ] );
    },
    requestConnectionPriority( address, connectionPriority, onPass, onFail )
    {
        cordova.exec( onPass || log, onFail || log, "BluetoothLePlugin", "requestConnectionPriority", [ { address: address || '', connectionPriority: connectionPriority || 'balanced' } ] );
    },
    encodedStringToBytes( string )
    {
        var data = atob( string );
        var bytes = new Uint8Array( data.length );
        for ( var i = 0; i < bytes.length; i++ ) {
            bytes[ i ] = data.charCodeAt( i );
        }
        return bytes;
    },
    bytesToEncodedString( bytes )
    {
        return btoa( String.fromCharCode.apply( null, bytes ) );
    },
    encodedStringToString: atob,
    stringToEncodedString: btoa,
    encodedStringToBits( string )
    {
        var o = [];
        for ( var d = 0; d < atob( string ).length; d++ )o.push( atob( string ).charCodeAt( d ).toString( 2 ) );
        for ( var b = 0; b < o.length; b++ )while ( o[ b ].length % 8 )o[ b ] = '0' + o[ b ];
        return o;
    },
    stringToBits( string )
    {
        var o = [];
        for ( var d = 0; d < string.length; d++ )o.push( string.charCodeAt( d ).toString( 2 ) );
        for ( var b = 0; b < o.length; b++ )while ( o[ b ].length % 8 )o[ b ] = '0' + o[ b ];
        return o;
    },
    bitsToEncodedString( bits )
    {
        var string = '';
        for ( var i in bits ) string += String.fromCharCode( parseInt( i, 2 ) );
        return btoa( string );
    },
    bitsToString( bits )
    {
        var string = '';
        for ( var i in bits ) string += String.fromCharCode( parseInt( i, 2 ) );
        return string;
    },
    stringToBytes( string )
    {
        var bytes = new ArrayBuffer( string.length * 2 );
        var bytesUint16 = new Uint16Array( bytes );
        for ( var i = 0; i < string.length; i++ ) {
            bytesUint16[ i ] = string.charCodeAt( i );
        }
        return new Uint8Array( bytesUint16 );
    },
    bytesToString( bytes )
    {
        return String.fromCharCode.apply( null, new Uint16Array( bytes ) );
    },
    bitsToBytes( bits )
    {
        var string = '';
        for ( var i in bits ) string += String.fromCharCode( parseInt( i, 2 ) );
        var bytes = new ArrayBuffer( string.length * 2 );
        var bytesUint16 = new Uint16Array( bytes );
        for ( var i = 0; i < string.length; i++ ) {
            bytesUint16[ i ] = string.charCodeAt( i );
        }
        return new Uint8Array( bytesUint16 );
    },
    bytesToBits( bytes )
    {
        var string = String.fromCharCode.apply( null, new Uint16Array( bytes ) );
        var o = [];
        for ( var d = 0; d < string.length; d++ )o.push( string.charCodeAt( d ).toString( 2 ) );
        for ( var b = 0; b < o.length; b++ )while ( o[ b ].length % 8 )o[ b ] = '0' + o[ b ];
        return o;
    }
};
module.exports = bluetoothle;
