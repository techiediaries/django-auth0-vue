def jwt_get_username_from_payload_handler(payload):
    return payload.get('sub').replace('|', '.')